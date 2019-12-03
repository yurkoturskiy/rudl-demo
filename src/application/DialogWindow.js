import React, { useState, useContext, useEffect, useRef } from "react";

import PropTypes from "prop-types";

function DialogWindow(props) {
  const [cardWidth, setCardWidth] = useState();
  const [cardHeight, setCardHeight] = useState();
  const [cardPosX, setCardPosX] = useState();
  const [cardPosY, setCardPosY] = useState();
  const [dialogHeight, setDialogHeight] = useState();

  // Set and update card's size
  const updateCardParams = () => {
    const element = document.getElementById(node.id);
    setCardHeight(`${element.offsetHeight}px`);
    setCardWidth(`${element.offsetWidth}px`);
  };
  useEffect(() => {
    const element = document.getElementById(node.id);
    setCardHeight(`${element.offsetHeight}px`);
    setCardWidth(`${element.offsetWidth}px`);
    window.addEventListener("resize", updateCardParams);
    return () => window.removeEventListener("resize", updateCardParams);
  }, []);

  // Set and update card's position
  useEffect(() => {
    const element = document.getElementById(node.id);
    var rect = element.getBoundingClientRect();
    setCardPosX(rect.left);
    setCardPosY(rect.top);
    setDialogHeight(() => {
      if (props.inEdit) {
        const dialogElement = document.getElementById(`${node.id}-dialog`);
        return dialogElement.offsetHeight;
      }
      return dialogHeight;
    });
  }, [props, dialogHeight, node.id]);

  useEffect(() => {
    // Adjust height of the title field
    if (props.inEdit) {
      titleInputRef.current.style.height = "0px";
      let fieldWidth = Math.min(500, (window.innerWidth / 100) * 80) + "px";
      titleInputRef.current.style.width = fieldWidth;
      var outerHeight = parseInt(
        window.getComputedStyle(titleInputRef.current).height,
        10
      );
      var diff = outerHeight - titleInputRef.current.clientHeight;
      titleInputRef.current.style.height =
        Math.max(38, titleInputRef.current.scrollHeight + diff) + "px";
    }
  }, [title, titleInputRef, props.inEdit]);

  useEffect(() => {
    // Adjust height of the content field
    if (props.inEdit) {
      contentInputRef.current.style.height = "0px";
      let fieldWidth = Math.min(500, (window.innerWidth / 100) * 80) + "px";
      contentInputRef.current.style.width = fieldWidth;
      var outerHeight = parseInt(
        window.getComputedStyle(contentInputRef.current).height,
        10
      );
      var diff = outerHeight - contentInputRef.current.clientHeight;

      contentInputRef.current.style.height =
        Math.max(38, contentInputRef.current.scrollHeight + diff) + "px";
    }
  }, [content, contentInputRef, props.inEdit]);

  const onTitleChange = event => setTitle(event.target.value);

  const onContentChange = event => setContent(event.target.value);

  const closeEdit = () => {
    // Send new data to the server and close dialog window
    props.client.mutate({
      mutation: EDIT_NOTE,
      variables: {
        id: node.id,
        title,
        content
      },
      optimisticResponse: {
        updateNote: {
          newNote: {
            ...node,
            title,
            content,
            __typename: "NoteNode"
          },
          __typename: "UpdateNotePayload"
        }
      }
    });
    props.setInEdit(false);
  };

  return (
    <div
      className={wrapper}
      style={{
        "--card-width": cardWidth,
        "--card-height": cardHeight,
        "--card-pos-x": `${cardPosX}px`,
        "--card-pos-y": `${cardPosY}px`,
        "--dialog-height": `${dialogHeight}px`
      }}
    >
      <CSSTransition
        in={props.inEdit}
        timeout={300}
        classNames="dialog"
        onEnter={() => props.switchVisibility()}
        onExited={() => props.switchVisibility()}
        unmountOnExit
      >
        <div
          className={dialogWindow}
          style={{ backgroundColor: noteColorVariable }}
          id={`${node.id}-dialog`}
        >
          <form>
            <div>
              {!title && (
                <label htmlFor="dialog-window-title" className={titleLabel}>
                  Title
                </label>
              )}
              <textarea
                id="dialog-window-title"
                className={titleInput}
                onChange={e => onTitleChange(e)}
                type="text"
                value={title}
                ref={titleInputRef}
              />
            </div>
            <div>
              <textarea
                className={contentInput}
                onChange={e => onContentChange(e)}
                type="text"
                data-adaptheight
                value={content}
                ref={contentInputRef}
              />
            </div>
          </form>
        </div>
      </CSSTransition>
      {props.inEdit && (
        <div className={background} onClick={() => closeEdit()} />
      )}
      {props.children}
    </div>
  );
}

DialogWindow.propTypes = {
  inEdit: PropTypes.bool,
  setInEdit: PropTypes.func
};

export default withApollo(DialogWindow);

(function () {
  ("use strict");

  // list out the vars
  var mOverlay = getId("modal-dialog"),
    mOpen = getId("modal_open"),
    mClose = getId("modal_close"),
    modal = getId("modal-holder"),
    modalOpen = false,
    lastFocus;

  function getId(id) {
    return document.getElementById(id);
  }

  // Let's open the modal
  function modalShow() {
    mOverlay.setAttribute("data-hidden", "false");
    modalOpen = true;
  }

  function modalClose(event) {
    mOverlay.setAttribute("data-hidden", "true");
  }

  // If you want the modal window to open when the page loads, remove the comment below.
  //window.onload = modalShow();
  mOpen.addEventListener("click", modalShow);
  mClose.addEventListener("click", modalClose);
})();

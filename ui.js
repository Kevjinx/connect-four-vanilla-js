const clickTargetContainer = document.getElementById("click-targets");
clickTargetContainer.addEventListener("focus", (e) => {
  columnIsFullPlaceholder
    ? e.target.classList.add("full")
    : e.target.classList.add("token", placeholderForPlayerIndicatingRedOrBlack);
});
clickTargetContainer.addEventListener("blur", (e) => {
  columnIsFullPlaceholder
    ? e.target.classList.remove("full")
    : e.target.classList.remove(
        "token",
        placeholderForPlayerIndicatingRedOrBlack
      );
});
clickTargetContainer.addEventListener("click", (e) => {
  columnIsFullPlaceholder
    ? e.target.classList.add("full")
    : e.target.classList.remove(
        "token",
        placeholderForPlayerIndicatingRedOrBlack
      );
  //append new div to column
  //need to located specific column
  //div = <div class="token red"></div>
  //condition or access player's color for class name
  const newTokenDiv = document.createElement("div");
  const columnDiv = document.getElementById(placeholderForTheSpecificColumn);
  newTokenDiv.classList.add("token", placeholderForPlayerIndicatingRedOrBlack);
});

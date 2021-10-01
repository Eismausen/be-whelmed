const deleteDogs = document.getElementById("monster");
const restoreDogs = document.getElementById("redemption");
const container = document.getElementById('pic-container');

deleteDogs.addEventListener("click", dogDeleter);
restoreDogs.addEventListener("click", dogRestorer);

function dogDeleter() {
    alert("You're a monster!");
    container.remove();
}

function dogRestorer() {
    alert("Feeling remorseful?");
    document.body.append(container);
}

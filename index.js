function displaySongInfo() {
    event.preventDefault();
    const songName = document.getElementById("songname").value;
    const youtube = document.getElementById("youtube").value;
    const description = document.getElementById("description").value;
    const year = document.getElementById("year").value;

    document.getElementById("songenamevalue").innerHTML = songName;

    document.getElementById("youtubevalue").innerHTML = youtube;

    document.getElementById("descriptionvalue").innerHTML = description;
    document.getElementById("yearvalue").innerHTML = year;

    document.getElementById("form").style.display = ("none");
    document.getElementById("display").style.display = ("block");
}




module.exports = {
    displaySongInfo: displaySongInfo,
};
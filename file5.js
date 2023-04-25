// Event

clickbtn.onclick = function()
{
    alert("thanks for visit")
}

// 
function callMe()
{
    alert("thanks for watching")
}

clickbtn.onclick = callMe

clickbtn.addEventListener('click', callMe)

clickbtn.removeEventListener('click', callMe)
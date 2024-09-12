// new Date().getHours(); 현재시간 확인
const hour = new Date().getHours();
console.log(hour);

// 0~9 : lightblue
// 10~15 : orange
// 16~20 : pink
// 21~24 : purple

if (hour >= 0 && hour < 10) {
    document.body.style.backgroundColor = "lightblue"
}

else if (hour >= 10 && hour < 16) {
    document.body.style.backgroundColor = "orange"
}

else if (hour >= 16 && hour < 21) {
    document.body.style.backgroundColor = "pink"
}

else if (hour >= 21 && hour < 24) {
    document.body.style.backgroundColor = "purple"
}

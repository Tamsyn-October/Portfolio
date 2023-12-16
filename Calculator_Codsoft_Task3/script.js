let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Clear() {
  outputScreen.value = '';
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}


function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  }
  catch (err) { alert("Invalid") }
}


const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = () => {
  themeBtn.classList.toggle("paintbrush");
  if (themeBtn.classList.contains("paintbrush")) {
    document.body.classList.add("changeTheme");
  } else {
    document.body.classList.remove("changeTheme");
  }

}


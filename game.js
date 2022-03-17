const main = () => {
  const inputArea1 = document.querySelector(".input1");
  const inputArea2 = document.querySelector(".input2");
  const inputArea3 = document.querySelector(".input3");
  const inputSubmit = document.querySelector(".input-submit");
  const r1n1 = document.querySelector(".r1n1");
  const r1n2 = document.querySelector(".r1n2");
  const r1n3 = document.querySelector(".r1n3");
  const r2n1 = document.querySelector(".r2n1");
  const r2n2 = document.querySelector(".r2n2");
  const r2n3 = document.querySelector(".r2n3");
  const r3n1 = document.querySelector(".r3n1");
  const r3n2 = document.querySelector(".r3n2");
  const r3n3 = document.querySelector(".r3n3");
  let r1FinishingText = document.querySelector(".r1-finishing-text");
  let r2FinishingText = document.querySelector(".r2-finishing-text");
  let r3FinishingText = document.querySelector(".r3-finishing-text");
  const r1FinishButton = document.querySelector(".r1-finishing");
  const r2FinishButton = document.querySelector(".r2-finishing");
  const r3FinishButton = document.querySelector(".r3-finishing");
  const finalText = document.querySelector(".final-text-out");
  const reset = document.querySelector(".form-reset");

  let input1,
    input2,
    input3,
    out1,
    out2,
    out3,
    WinOrNot,
    winningMoney,
    losingMoney;

  let initialState = () => {
    (input1 = ""),
      (input2 = ""),
      (input3 = ""),
      (out1 = 0),
      (out2 = 0),
      (out3 = 0),
      (inputArea1.value = "");
    inputArea2.value = "";
    inputArea3.value = "";
    WinOrNot = false;
    r1FinishingText.textContent = "";
    r2FinishingText.textContent = "";
    r3FinishingText.textContent = "";
    winningMoney = 0;
    losingMoney = 0;
    r1n1.textContent = 0;
    r1n2.textContent = 0;
    r1n3.textContent = 0;
    r2n1.textContent = 0;
    r2n2.textContent = 0;
    r2n3.textContent = 0;
    r3n1.textContent = 0;
    r3n2.textContent = 0;
    r3n3.textContent = 0;
    finalText.textContent = "";
    inputSubmit.removeAttribute("disabled", "disabled");
    r1FinishButton.setAttribute("disabled", "disabled");
    r2FinishButton.setAttribute("disabled", "disabled");
    r3FinishButton.setAttribute("disabled", "disabled");
    inputArea1.removeAttribute("disabled", "disabled");
    inputArea2.removeAttribute("disabled", "disabled");
    inputArea3.removeAttribute("disabled", "disabled");
  };

  initialState();
  // Main function that makes the lottery

  function lottery(num1, num2, num3) {
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    random3 = Math.floor(Math.random() * 6) + 1;

    if (random1 === 1) {
      out1 = num2;
    } else if (random1 === 2) {
      out1 = num1;
    } else {
      out1 = num3;
    }

    if (random2 === 1) {
      out2 = num2;
    } else if (random2 === 2) {
      out2 = num1;
    } else {
      out2 = num3;
    }

    if (random3 === 1) {
      out3 = num2;
    } else if (random3 === 2) {
      out3 = num1;
    } else {
      out3 = num3;
    }

    if (out1 === out2 && out2 === out3) {
      WinOrNot = true;
    } else {
      WinOrNot = false;
    }
    console.log(WinOrNot);
  }

  let round1 = () => {
    lottery(input1, input2, input3);
    console.log(out1, out2, out3);
    r1n1.textContent = out1;
    r1n2.textContent = out2;
    r1n3.textContent = out3;
    r1FinishButton.removeAttribute("disabled", "disabled");
    if (WinOrNot) {
      r1FinishingText.textContent = " You have won 10$";
      winningMoney += 10;
    } else if (!WinOrNot) {
      r1FinishingText.textContent = " You have lost 10$";
      losingMoney += 10;
    }
    inputArea1.setAttribute("disabled", "disabled");
    inputArea2.setAttribute("disabled", "disabled");
    inputArea3.setAttribute("disabled", "disabled");
  };

  let round2 = () => {
    lottery(input1, input2, input3);
    console.log(out1, out2, out3);
    r2n1.textContent = out1;
    r2n2.textContent = out2;
    r2n3.textContent = out3;
    r2FinishButton.removeAttribute("disabled", "disabled");
    if (WinOrNot) {
      r2FinishingText.textContent = " You have won 10$";
      winningMoney += 10;
    } else if (!WinOrNot) {
      r2FinishingText.textContent = " You have lost 10$";
      losingMoney += 10;
    }
    r1FinishButton.setAttribute("disabled", "disabled");
    r2FinishButton.removeAttribute("disabled", "disabled");
  };

  let round3 = () => {
    lottery(input1, input2, input3);
    console.log(out1, out2, out3);
    r3n1.textContent = out1;
    r3n2.textContent = out2;
    r3n3.textContent = out3;
    r3FinishButton.removeAttribute("disabled", "disabled");
    if (WinOrNot) {
      r3FinishingText.textContent = " You have won 10$";
      winningMoney += 10;
    } else if (!WinOrNot) {
      r3FinishingText.textContent = " You have lost 10$";
      losingMoney += 10;
    }
    r2FinishButton.setAttribute("disabled", "disabled");
    r3FinishButton.removeAttribute("disabled", "disabled");
  };

  inputSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    input1 = inputArea1.value;
    input2 = inputArea2.value;
    input3 = inputArea3.value;

    console.log(typeof input1, typeof input2, typeof input3);
    if (input1.length === 0 || input2.length === 0 || input3.length === 0) {
      alert(
        "❌ Empty Boxes \r\n❌ Anything Except Numbers \r\n❌Spaces between numbers"
      );
      return;
    }
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    input3 = parseInt(input3);
    if (input1 === input2 || input2 === input3 || input1 === input3) {
      alert("You can't give same numbers!");
      return;
    }
    inputArea1.value = "";
    inputArea2.value = "";
    inputArea3.value = "";
    console.log(input1, input2, input3);
    inputSubmit.setAttribute("disabled", "disabled");

    round1();
  });

  r1FinishButton.addEventListener("click", (evt) => {
    round2();
  });

  r2FinishButton.addEventListener("click", (evt) => {
    round3();
  });

  r3FinishButton.addEventListener("click", (evt) => {
    if (losingMoney > winningMoney) {
      finalText.textContent = "You Have lost $" + (losingMoney - winningMoney);
    } else {
      finalText.textContent = "You Have won $" + (winningMoney - losingMoney);
    }
    r3FinishButton.setAttribute("disabled", "disabled");
    r1FinishButton.setAttribute("disabled", "disabled");
  });

  reset.addEventListener("click", (evt) => {
    evt.preventDefault();
    initialState();
  });
};

main();

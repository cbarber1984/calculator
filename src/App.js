import React, { useState } from "react";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  [
    { value: "C", id: "clear" },
    { value: "+-", id: "invert" },
    { value: "%", id: "percentage" },
    { value: "/", id: "divide" },
  ],
  [
    { value: 7, id: "seven" },
    { value: 8, id: "eight" },
    { value: 9, id: "nine" },
    { value: "X", id: "multiply" },
  ],
  [
    { value: 4, id: "four" },
    { value: 5, id: "five" },
    { value: 6, id: "six" },
    { value: "-", id: "subtract" },
  ],
  [
    { value: 1, id: "one" },
    { value: 2, id: "two" },
    { value: 3, id: "three" },
    { value: "+", id: "add" },
  ],
  [
    { value: 0, id: "zero" },
    { value: ".", id: "decimal" },
    { value: "=", id: "equals" },
  ],
];

// input formatting
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

// end input formatting

function App() {
  // State
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  // numClickHandler function
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log("value = " + value);

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  // commaClickHandler function
  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // signClickHandler function
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // equalsClickHandler function
  const equalsClickHandler = () => {
    console.log("called equalsClickHandler");
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              ),
        sign: "",
        num: 0,
      });
    }
    console.log(calc.num);
  };

  //invertClickHandler
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  // percent clickHandler
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  // reset clickHandler
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              id={btn.id}
              className={btn.id} // value === "=" ? "equals" : ""
              value={btn.value}
              onClick={
                btn.value === "C"
                  ? resetClickHandler
                  : btn.value === "+-"
                  ? invertClickHandler
                  : btn.value === "%"
                  ? percentClickHandler
                  : btn.value === "="
                  ? equalsClickHandler
                  : btn.value === "/" ||
                    btn.value === "X" ||
                    btn.value === "-" ||
                    btn.value === "+"
                  ? signClickHandler
                  : btn.value === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
      <Footer />
    </Wrapper>
  );
}

export default App;

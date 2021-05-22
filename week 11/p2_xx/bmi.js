// // 計算BMI，並回傳
function bmiCalc(height, weight) {
  return;
}

// 計算 Normal BMI 之下限，並回傳
function bmi_normal_low(height) {
  return;
}

// 計算 Normal BMI 之上限，並回傳
function bmi_normal_high(height) {
  return;
}

// 計算 BMI，並給予建議
function bmiCalcSuggest(height, weight) {
  let bmi = bmiCalc(height, weight).toFixed(2);
  // add your code
}

bmiCalcSuggest(1.75, 55);
bmiCalcSuggest(1.75, 70);
bmiCalcSuggest(1.75, 85);

/*
or (h/w) = (1.75/55), the BMI = 17.96 which is 1.66 kg lower than normal 
For (h/w) = (1.75/70), the BMI = 22.86 which is normal.
For (h/w) = (1.75/85), the BMI = 27.76 which is 11.50 kg higher than normal.

*/

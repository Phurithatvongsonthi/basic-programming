function BMI(Weight: number, Height: number){
    let body: number = (Weight / (Height*Height))
    
    if(body < 18.5){
        return 'ผอม'
    } else if (body >= 18.50 && body <= 22.90 ){
        return 'สมส่วน '
    } else if (body >= 23 && body <= 24.90){
        return 'เริ่มอ้วน '
    } else if(body >= 25 && body <= 29.90){
        return 'อ้วน'
    }else if (body > 30){
        return 'อ้วนมากไปแล้ว'
    }return
}
console.log(BMI(100,1.90))
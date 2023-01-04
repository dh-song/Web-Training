let y = 2023;
let m = '01';
let d = 04;
let tplate = `${y}-${m}-${d}`;
console.log(tplate);

let className = 'p-elect';
let title = '스마트 폰'

let product = String.raw`<section class="${className}">\n\n
                <h1>${title}</h1>
                    </section>`;
console.log(product);

let attName = "kor";

let exam = {
    [attName]:10,
    eng:20,
    math:30,
    student:{
        name: 'newlec',
        phone: '010-2222-3333'
    }
};
console.log(`kor:${exam.kor}`);

let{kori,eng, student:{name,phone}} = exam; //변수에 각각 값 입력

console.log(phone);
console.log(kori); //undef
let{kor:korii, ma=13} = exam;
console.log(korii); //kor
console.log(ma);
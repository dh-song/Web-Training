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
    [attName]: 10,
    eng: 20,
    math: 30,
    student: {
        name: 'newlec',
        phone: '010-2222-3333'
    }
};
console.log(`kor:${exam.kor}`);

let { kori, eng, student: { name, phone } } = exam; //변수에 각각 값 입력

console.log(phone);
console.log(kori); //undef
let { eng: korii, ma = 13 } = exam;
console.log(korii); //eng
console.log(ma);
let std1 = {namee:'dragon', phone:'010'};
({namee, phone} = std1);

let kors = [10, 20, 30];
let [kor1, kor2, kor3] = kors;

let kors2 = [11, 21, 31];
[kor1, kor2, kor3] = kors2; // 선언된 변수에 담기,let선언 제거
console.log(kor1);

let a,b;
[a,b] = kors2;
console.log(a);

a = 20;
b = 30;
[a,b] = [b,a];

let nums = [1,2,3,4,5,6,7,8,9,10];
let [n1,n2,...rest]=nums;
console.log(rest);
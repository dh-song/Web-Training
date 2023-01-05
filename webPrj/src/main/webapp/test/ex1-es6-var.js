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
console.log(a,b);

let nums = [1,2,3,4,5,6,7,8,9,10];
let [n1,n2,...rest]=nums; // ... 나머지
console.log(rest);

//set 중복 비허용
let set = new Set([2,3,23,3,2,1,7,5,4,3,2,33,23]);//has,delete,clear
// set.add(5);
// set.add("5");
// set.add(2);
// set.add(5);
// set.add(3);

console.log(`size :${set.size}`);
for (let n of set) {
    console.log(n);
}
for (let k in set) {
    console.log(`------`);
    console.log(k);
}

set.forEach((v)=>{ //이전 반복문
    console.log(`value: ${v}`);
});
set.forEach((v, k)=>{ //이전 반복문
    console.log(`key: ${k}, value: ${v}`);
});

let map = new Map();
map.set("id", 1);
map.set("title", "map이란?");
console.log(`map for each---------------`);
map.forEach(function(v,k){
    console.log(`key:${k}, value:${v}`);
});

let notice = new Map();
notice.set("id", 1);
notice.set("title", "map is ...?");
notice.set("writer", "newlec");

console.log(notice.get("title"));

notice.forEach(function(v,k){
    console.log(`key:${k}, value:${v}`);
});

for (let k of notice.keys()) {
    console.log(`key: ${k}`);
}
for (let v of notice.values()) {
    console.log(`key: ${v}`);
}
console.log(`-----entries---------`);
for (let [k,v] of notice.entries()) {
    console.log(`key: ${k}, value: ${v}`);
}
let exam3 = {
    kor:0,
    eng:0,
    math:0
};
for (let [k,v] of Object.entries(exam3)) { //object 메소드 사용으로 배열 형식 반환
    console.log(`key: ${k}, value: ${v}`);
}

let list = [
    {id:1, title:"jsp..", writerId:"newlec"},
    {id:2, title:"java..", writerId:"newlec"},
    {id:3, title:"JS..", writerId:"newlec"},
    {id:4, title:"spring..", writerId:"newlec"}
];

list.forEach((n)=>{});
let ar = list.map((n)=>{return `<span>${n.title}</span>`});
console.log(ar);
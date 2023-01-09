import aa,{test1, test2} from "./module1.js";
import bb,{test1 as test3} from "./module2.js"; //같은 이름이라 바꿈
//export class Exam ..
//let exam1 = new Exam();
// 내보내는 페이지에서 new Exam() 은 default 로 보낼 수 있음
// let 변수에 담으면 default 없어도 댐

aa();
test1();
test2();

bb();
test3();
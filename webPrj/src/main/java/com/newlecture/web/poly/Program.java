package com.newlecture.web.poly;

import java.util.ArrayList;
import java.util.List;

public class Program {

	public static void main(String[] args) {
		
		List list = new ArrayList<>();
		list.add(new Exam(1, 3, 4));
		list.add(new Exam(10, 35, 2));
		list.add(new Exam(65, 65, 31));
		list.add(new Exam(53, 76, 77));
		list.sort((x,y)->((Exam)x).getEng()-((Exam)y).getEng());
//		람다식으로 sort 컴퍼레이터
		System.out.println(list);
		
//		Banner banner = new ICTBanner();

		class AAA implements Banner {
			@Override
			public void print() {
				System.out.println("내부 클래스 ICT ");
			}
		}
//		Banner bann = new AAA();
//		Exam.printIntro(bann);
		
		Banner banner2 = new Banner() {
			@Override
			public void print() {
				System.out.println("익명 클래스 ICT ");
			}			
		};
//		Exam.printIntro(banner2);

		ExamConsole.printIntro(()->{ //구현 함수가 2개 이상이면 사용불가
			System.out.println("람다식 익명 클래스 ICT");
		});

	}

}

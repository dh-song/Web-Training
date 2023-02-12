package com.newlecture.web.entity;

public class NList { // 컬렉션 배열 예
	
	private Object[] data;
	private int index;
	private int max;
	
	public NList() {
		index = 0;
		max = 3;
		data = new Object[max];
	}
	
	public void add(Object n) {
		
		if (index == max) {
			Object[] temp = new Object[max+3];
			for (int i = 0; i < max; i++) {
				temp[i] = data[i];
				
				data = temp;
				max = max+3;
			}
			data[index] = n;
			index++;
		}
	}
	
	public Object get(int idx) {
		return data[idx];
	}
	
	public int size() {
		return index;
	}
	
}

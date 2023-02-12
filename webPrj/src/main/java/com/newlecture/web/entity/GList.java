package com.newlecture.web.entity;

public class GList<재영> { //제네릭 사용
	
	private 재영[] data;
	private int index;
	private int max;
	
	public GList() {
		index = 0;
		max = 3;
		data = (재영[])new Object[max];
	}
	
	public void add(재영 n) {
		
		if (index == max) {
			재영[] temp = (재영[])new Object[max];
			for (int i = 0; i < max; i++) {
				temp[i] = data[i];
				
				data = temp;
				max = max+3;
			}
			data[index] = n;
			index++;
		}
	}
	
	public 재영 get(int idx) {
		return data[idx];
	}
	
	public int size() {
		return index;
	}
	
}

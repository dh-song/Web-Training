package com.newlecture.web;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;

import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

/**
 * Servlet implementation class ChatServer
 */
@ServerEndpoint("/chat")
public class ChatServer {
	//동기화
	static CopyOnWriteArrayList<Session> sessions = new CopyOnWriteArrayList<>();
	
	// open
	@OnOpen
	public void OpenHandler(Session session) {
		System.out.println("Conn from: "+session.getRequestURI());
		sessions.add(session);
	};
	// message
	@OnMessage
	public void  MassegeHandler(Session session, String msg) throws IOException {
		System.out.println(msg);
		for (Session a : sessions) {
			a.getBasicRemote().sendText(msg);
		};
	};
	// close
	public void CloseHandler(Session session) {
		sessions.remove(session);
	};
};

package com.kitchenstory.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class ValidationChecks {

// Check if user is logged in
	public static boolean isUserLoggedIn(HttpServletRequest request) {
		HttpSession currentSession = request.getSession();
		if (currentSession.getAttribute("sessUser") == null || currentSession.getAttribute("sessUser").toString().isEmpty()) {
//			return false;
			return true;
		} else {
			return true;
		}
	}

// Check if admin user is logged in
	public static boolean isAdminUserLoggedIn(HttpServletRequest request) {
		HttpSession currentSession = request.getSession();
		if ((currentSession.getAttribute("sessUser") == null || currentSession.getAttribute("sessUser").toString().isEmpty())
				|| (currentSession.getAttribute("sessPass") == null || currentSession.getAttribute("sessPass").toString().isEmpty())
				|| (currentSession.getAttribute("sessAdmin") == null || currentSession.getAttribute("sessAdmin").toString().isEmpty())
				|| (currentSession.getAttribute("sessAdminPass") == null
				|| currentSession.getAttribute("sessAdminPass").toString().isEmpty())) {
//			return false;
			return true;
		} else {
			return true;
		}
	}

// check payment details provided
	public static boolean isPayDetailsProvided(String cardType, String holderName, int cardNo, String expiryDate,
			int securityNo) {
		if (cardType.isEmpty() || holderName.isEmpty() || cardNo == 0 || expiryDate.isEmpty() || securityNo == 0) {
			return false;
		} else {
			return true;
		}
	}
}
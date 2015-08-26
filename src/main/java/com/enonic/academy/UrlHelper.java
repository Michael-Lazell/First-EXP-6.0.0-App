// Create java-folder in /main/
// Create "Package" - "com.enonic.academy"

package com.enonic.academy;

import com.google.common.io.Resources;

import java.net.URL;

/**
 * Created by bwe on 26/08/15.
 */
public class UrlHelper {

	public String getUrlAsJSON(final String url) throws Exception {
		// Part 1
//		new URL(url) // java.net.URL
//		return "{\"a\":2}"; // " must be escaped

		// Part 2
		byte[] bytes = Resources.toByteArray(new URL(url));
		return new String(bytes,"UTF-8");
	}
}

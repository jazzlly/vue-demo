package com.example.flywaydemo;

import com.example.flywaydemo.domain.Account;
import com.example.flywaydemo.domain.AccountRepository;
import com.example.flywaydemo.domain.User;
import com.example.flywaydemo.domain.UserRepository;
import org.apache.http.client.utils.URIBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FlywayDemoApplicationTests {
	@LocalServerPort
	String serverPort;

	@Autowired
	TestRestTemplate testRestTemplate;

	@Autowired
	UserRepository userRepository;

	@Autowired
	AccountRepository accountRepository;


	@Test
	public void smoke() {
		Optional<User> user = userRepository.findByUsername("flywaytest");
		assertThat(user.isPresent()).isTrue();
		assertThat(user.get().getFirstName()).isEqualTo("Flyway");
	}

	@Test
	public void accountSmoke() {
		accountRepository.deleteAllInBatch();

		Account account = Account.builder()
				.email("foo@pekall.com")
				.age(38)
				.password("1234")
				.confirmPassword("1234")
				.country("cn")
				.terms("123")
				.build();

		Account saved = accountRepository.save(account);
		Optional<Account> found = accountRepository.findByEmail(account.getEmail());
		assertThat(found.isPresent()).isTrue();
		assertThat(found.get()).isEqualTo(saved);
	}

	@Test
	public void accountControllerSmoke() throws URISyntaxException {
		accountRepository.deleteAllInBatch();

		Account account = Account.builder()
				.email("foo@pekall.com")
				.age(38)
				.password("1234")
				.confirmPassword("1234")
				.country("cn")
				.terms("123")
				.build();
		HttpEntity<Account> httpEntity =
				new HttpEntity<>(account, genHeaders());
		ResponseEntity<String> resp = testRestTemplate.exchange(
				genUri(serverPort, "/account"),
				HttpMethod.POST, httpEntity, String.class);
		System.out.println(resp.getBody());
		assertThat(resp.getStatusCodeValue()).isEqualTo(200);

		Optional<Account> found = accountRepository.findByEmail(account.getEmail());
		assertThat(found.isPresent()).isTrue();
		assertThat(found.get())
				.isEqualToIgnoringGivenFields(account,"id");
	}

	public static HttpHeaders genHeaders() {
		HttpHeaders headers = new HttpHeaders();
		MediaType type = MediaType.parseMediaType("application/json; charset=UTF-8");
		headers.setContentType(type);
		headers.add("Accept", MediaType.APPLICATION_JSON.toString());
		return headers;
	}

	public static URI genUri(String serverPort, String path) throws URISyntaxException {
		return new URIBuilder()
				.setScheme("HTTP")
				.setHost("localhost")
				.setPort(Integer.parseInt(serverPort))
				.setPath(path)
				.build();
	}
}

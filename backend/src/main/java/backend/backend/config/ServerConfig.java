// package backend.backend.config;

// import org.apache.catalina.connector.Connector;
// import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
// import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// @Configuration
// public class ServerConfig {
//     @Bean
//     public ServletWebServerFactory servletContainer() {
//         Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
//         connector.setPort(4000);

//         TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
//         tomcat.addAdditionalTomcatConnectors(connector);
//         return tomcat;
//     }
// }
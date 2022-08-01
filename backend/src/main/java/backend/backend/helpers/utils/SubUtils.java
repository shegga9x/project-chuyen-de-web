package backend.backend.helpers.utils;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.security.core.context.SecurityContextHolder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import backend.backend.helpers.advice.CustomException;
import backend.backend.persitence.model.UserDetailCustom;
import backend.backend.persitence.model.ghn.GHNServiceModel;

public class SubUtils {

    public static boolean isNullOrBlank(String param) {
        return param == null || param.trim().length() == 0;
    }

    public static Object mapperObject(Object from, Object to) {
        try {
            if (from == null) {
                return null;
            }
            BeanUtils.copyProperties(to, from);
        } catch (Exception e) {
            e.printStackTrace();
            throw new CustomException("Error Mapper");
        }
        return to;
    }

    public static String removeBracketsFromArray(String[] array) {
        return Arrays.toString(array).replace(",", "").replace("[", "").replace("]", "").trim();
    }

    public static UserDetailCustom getCurrentUser() {
        return (UserDetailCustom) SecurityContextHolder.getContext()
                .getAuthentication()
                .getPrincipal();
    }

    public static String toJson(Object object) {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        try {
            String json = ow.writeValueAsString(object);
            return json;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Object jsonToObject(String json, Object result) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            Object result1 = mapper.readValue(json, result.getClass());
            return result1;
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static List<?> jsonToListObject(String json) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<GHNServiceModel> result1 = mapper.readValue(json, new TypeReference<List<GHNServiceModel>>() {
            });
            return result1;
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

}

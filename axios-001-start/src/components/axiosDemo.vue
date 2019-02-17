<template>
  <div class="container">
    <button @click="getDemo">Get</button>
    <br>
    <button @click="postDemo">Json Post</button>
    <br>
    <button @click="postDemo2">Form Post</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    getDemo() {
      axios
        .get("https://httpbin.org/get")
        .then(resp => {
          console.log(resp);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postDemo() {
      axios
        .post("https://httpbin.org/post", {
          firstName: "Fred",
          lastName: "Flintstone"
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });


      /* 两种方式都可以
      axios({
        method: "post",
        url: "https://httpbin.org/post",
        data: {
          firstName: "Fred",
          lastName: "Flintstone"
        },
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
        */
    },

    postDemo2() {
      var bodyFormData = new FormData();
      bodyFormData.set("userName", "Fred");
      bodyFormData.set("firstName", "Ryan");

      axios({
        method: "post",
        url: "https://httpbin.org/post",
        data: bodyFormData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  }
};
</script>


<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>

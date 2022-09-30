<template>
  
    <section class="w-1/2 mx-auto">
      <form name="contact-form" class="flex flex-col items-center justify-center space-y-4" @submit.prevent="handleSubmit()">
        
          <input
            v-model="formData.from_name"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            class="h-8 w-full border-teal-900 rounded px-2"
          />
        <input
          v-model="formData.from_email"
          type="email"
          name="from_email"
          placeholder="you@email.com"
          required
          class="h-8 w-full border-teal-900 rounded px-2"
        />
        <input
          v-model="formData.msg_subject"
          type="text"
          name="msg_subject"
          placeholder="Subject"
          required
          class="h-8 w-full border-teal-900 rounded px-2"
        />
        <textarea
          v-model="formData.msg_body"
          name="msg_body"
          placeholder="What are you writing about?"
          required
          class="w-full h-48 border-2 border-teal-900 rounded px-2"
        ></textarea>
        <button type="submit" class="w-max h-8 bg-teal-900 text-teal-50 rounded">Submit</button>
      </form>
    </section>

</template>

<script>
export default {
  name: "Contact",
  data () {
    return {
      formData: {
        from_name: "",
        from_email: "",
        msg_subject: "",
        msg_body: "",
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      // Must post to a path not handled by the SSR.
      // Path must exist
      fetch('/contactform', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: this.encode({
          "form-name": "contact-form",
          ...this.formData
        }),
      })
      .then(() => alert("Success!"))
      .catch((err) => alert("Error: %s", err))
      .finally(() => {
        console.log("formData: %s", JSON.stringify(this.formData))
      })
    }
  }
}
</script>


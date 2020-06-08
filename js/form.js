import { storage } from "./storage";

export class FormNative {
  constructor(form) {
    this.form = form;
    this.btnSubmit = this.form.querySelector('button[type="submit"]');

    this._handleSubmitForm = this._submitForm.bind(this);

    this._init();
  }

  _init() {
    this.btnSubmit.addEventListener("click", this._handleSubmitForm);
  }

  _submitForm(event) {
    event.preventDefault();

    if (!this.form.checkValidity()) {
      this.form.classList.add("invalid");
    } else {
      this.form.classList.remove("invalid");

      const formData = new FormData(this.form);
      formData.append("time", new Date());
      console.log(formData);

      const userData = {};

      for (const [name, value] of formData) {
        userData[name] = value;
      }

      this.form.reset();

      console.log(formData);
      storage.set("resume", userData);

      // localStorage.setItem("resume", JSON.stringify(userData));
    }
  }
}

// console.log(localStorage.getItem("userData[name]"));

// Доделаем ------------------------------------------------------------------
// export class FormCustom {
//   constructor(form) {
//     this.form = form;
//     this.btnSubmit = this.form.querySelector('button[type="submit"]');
//     this.fields = [...this.form.querySelectorAll('input')];

//     this.isValid = false;

//     this._handleSubmitForm = this._submitForm.bind(this);
//     this._handleChange = this._change.bind(this);

//     this._init();
//   }

//   _init() {
//     this.btnSubmit.addEventListener('click', this._handleSubmitForm);
//     this._listenHandleChange();
//   }

//   _listenHandleChange() {
//     this.fields.forEach((field) => {
//       field.addEventListener('change', this._handleChange);
//     });
//   }

//   _change(event) {
//     const field = event.currentTarget;

//     if (!field.checkValidity()) {
//       field.classList.add('invalid');
//     } else {
//       field.classList.remove('invalid');
//     }
//   }

//   _submitForm(event) {
//     event.preventDefault();

//     if (!this.form.checkValidity()) {
//       this.form.classList.add('invalid');
//     } else {
//       this.form.classList.remove('invalid');

//       const formData = new FormData(this.form);
//       formData.append('token', 'fgjsnjvkdfhsdjfhhuu5w4958y0457y03y5vm745y');
//       const userData = {};

//       for (let [name, value] of formData) {
//         userData[name] = value;
//       }

//       console.log(userData);
//     }
//   }
// }

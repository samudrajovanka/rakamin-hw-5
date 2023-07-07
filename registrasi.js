const validateName = (name) => {
  const nameHelperEl = document.querySelector('#nameHelp');
  let message = '';

  try {
    if (!name) {
      throw new Error('Nama wajib diisi')
    } else if (name.length < 10) {
      throw new Error('Nama minimal 10 karakter');
    }

    return true;
  } catch (e) {
    message = e.message;
    return false;
  } finally {
    nameHelperEl.innerText = message;
  }
}

const validateAge = (age) => {
  const ageHelperEl = document.querySelector('#ageHelp');
  let message = '';

  try {
    if (!age) {
      throw new Error('Umur wajib diisi')
    } else if (+age < 25) {
      throw new Error('Umur minimal 25 tahun');
    }

    return true;
  } catch (e) {
    message = e.message;
    return false;
  } finally {
    ageHelperEl.innerText = message;
  }
}
const validateMoney = (money) => {
  const moneyHelperEl = document.querySelector('#moneyHelp');
  let message = '';

  try {
    if (!money) {
      throw new Error('Uang sangu wajib diisi')
    } else if (+money < 100_000 || +money > 1_000_000) {
      throw new Error('Uang sangu minimal 100 ribu dan maksimal 1 juta');
    }

    return true;
  } catch (e) {
    message = e.message;
    return false;
  } finally {
    moneyHelperEl.innerText = message;
  }
}

const validateInput = (people) => {
  const isValidName = validateName(people.name);
  const isValidAge = validateAge(people.age);
  const isValidMoney = validateMoney(people.money);

  return isValidName && isValidAge && isValidMoney;
};

const setLoading = (isLoading) => {
  const btnSubmitRegistrationEl = document.querySelector('#btn-submit-registration');

  if (isLoading) {
    btnSubmitRegistrationEl.innerText = 'Saving...';
  } else {
    btnSubmitRegistrationEl.innerText = 'Save';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const formRegistrationEl = document.querySelector('#registration-form');

  formRegistrationEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRegistrationEl);

    const name = formData.get('name');
    const age = formData.get('age');
    const money = formData.get('money');
    const people = new People()
        .setName(name)
        .setAge(age)
        .setMoney(money);

    const isValid = validateInput(people);

    if (isValid) {
      await Database.save(people.getData());
      
      alert('Berhasil menambahkan');
      formRegistrationEl.reset();
    }

    setLoading(false);
  });
});
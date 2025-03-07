export const randomName = () => {
  const names = [
    "John",
    "Jane",
    "Doe",
    "Smith",
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

export const randomDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 365));
  return date.toLocaleDateString();
};

export const randomPhone = () => {
  const getRandomDigit = () => Math.floor(Math.random() * 10);

  const phone = Array.from({ length: 10 }, () => getRandomDigit()).join("");
  // Format the phone number.
  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
};

export const randomEmail = () => {
  const domains = ["example.com", "test.com", "demo.com"];
  const name = randomName().toLowerCase();
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${name}@${domain}`;
};

interface Person<T, U> {
  name: T;
  id: U;
}

let john: Person<string, string> = {
  name: "John Doe",
  id: "301", // OK. string passed to id here
};

let bruce: Person<string, number> = {
  name: "Bruce Wayne",
  id: 301, // OK.  number passed to id here
};

let hamza: Person<string, boolean> = {
  name: "Bruce Wayne",
  id: true, // OK.  boolean passed to id here
};

let victor: Person<string, Object> = {
  name: "Bruce Wayne",
  id: {
    title: "identity",
    value: "23",
  }, // OK.  object passed to id here
};

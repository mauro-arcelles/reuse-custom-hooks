# useForm

Ejemplo:
```
const initialForm = {
  name: '',
  age: 0,
  email: ''
};

const [formValues, handleInputChange, reset] = useForm(initialForm);

<form>
  <div className="grid w-full items-center gap-4">
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        value={formValues.email}
        onChange={handleInputChange}
      />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        required
        value={formValues.password}
        onChange={handleInputChange}
      />
    </div>
  </div>
</form>
```

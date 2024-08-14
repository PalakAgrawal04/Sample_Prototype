import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [mailingList, setMailingList] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!amount || amount <= 0) {
      errors.amount = 'Donation amount must be greater than 0';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with the donation process
      console.log({
        name,
        email,
        amount,
        message,
        mailingList,
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle >Support Our Cause</CardTitle>
        <CardDescription className="text-lg">
          Your donation will help us continue our mission of providing essential services to those in need. Every
          contribution makes a difference.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter donation amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0"
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (optional)</Label>
            <Textarea
              id="message"
              placeholder="Add a message or comment"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mailing-list"
              checked={mailingList}
              onChange={(e) => setMailingList(e.target.checked)}
            />
            <Label htmlFor="mailing-list">I want to receive updates and news from the organization</Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" onClick={handleSubmit}>Donate</Button>
      </CardFooter>
    </Card>
  );
}

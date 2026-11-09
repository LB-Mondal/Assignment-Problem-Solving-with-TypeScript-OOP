Title: TypeScript OOP তে Access Modifiers: Public, Private, Protected and Readonly
 
Introduction:
Object Oriented Programming (OOP) এ Access Modifiers ব্যবহার করে Class এর Properties এবং Methods এর Accessibility নিয়ন্ত্রণ করা হয়। TypeScript এ public, private, protected এবং readonly গুরুত্বপূর্ণ Access Control Fetures.  এগুলো Encapsulation নিশ্চিত করতে এবং Class এর ডাটা নিরাপদভাবে পরিচলান করতে সাহায্য করে।


Detailed Body Paragraphs with Code Examples:

Public Modifier:

public modifier  ব্যবহার করলে Class এর Property অথবা Method যেকোন জায়গা থেকে Access করা যায়। TypeScript এ কোন Property  বা মেথড মডিফাইয়ার উল্লেখ না করলে সেটি ডিফল্ট হিসেবে public থাকে।

কোডের উদাহরণ:
class Student{
    public name:string="Lorens";
}

const student = new Student();
student.name = "Bappy";

এখানে name Property Class এর বাইরে থেকেও একসেস এবং মডিফাই করা সম্ভব।

Private Modifier:

private Modifier ব্যবাহর করলে কোনো প্রোপার্টি অথবা মেথড শুধুমাত্র নিজের ক্লাসের ভিতরে একসেস করা যায়। ক্লাসের বাইরে থেকে সরাসরি একসেস করা যায় না।

কোডের উদাহরণ:

class BankAccount{
    private balance: number= 50000;

    public getBalance(): number{
        return this.balance;
    }
}

এখানে balance সরাসরি Class এর বাইরে একসেস করা যাবে না কিন্তু getBalance() Public Method এর মাধ্যমে এর ভ্যালু পাওয়া যাবে।

Protected Modifier:

protected Modifier ব্যবহার করলে Property অথবা মেথড নিজের class এব তার child class থেকে  একসেস করা যায়। কিন্তু class এর বাইরে থেকে সরাসরি একসেস করা যায় না।

কোডের উদাহরণ:

class Person {
    protected name: string = "Rahim";
}

class Student extends Person {
    public getName(): string {
        return this.name;
    }
}

এখানে Student Class, Person Class-কে Inherit করেছে। তাই Child Class থেকে name Property Access করা সম্ভব।


Readonly Modifier:

readonly Modifier ব্যবহার করলে কোনো Property একবার Initialize করার পর পুনরায় Assign করা যায় না। সাধারণত Constructor অথবা Declaration-এর সময় এর Value নির্ধারণ করা হয়।

কোডের উদাহরণ:

class Product {
    readonly productId: number = 101;
}

const product = new Product();

এখানে productId-এর Value পরবর্তীতে পরিবর্তন করা যাবে না। তবে এটি Read-only Property, সম্পূর্ণ Object Immutability নিশ্চিত করে না।

Conclusion:

TypeScript-এর Access Modifiers OOP-তে Encapsulation, Data Protection এবং Code Organization নিশ্চিত করতে সাহায্য করে। public সবার জন্য Access প্রদান করে, private শুধুমাত্র নিজের Class-এ সীমাবদ্ধ রাখে, protected Inheritance-এর মাধ্যমে Child Class-কে Access দেয় এবং readonly Property-এর পুনরায় Assignment প্রতিরোধ করে। সঠিকভাবে এগুলো ব্যবহার করলে আরও নিরাপদ, সংগঠিত এবং Maintainable Application তৈরি করা সম্ভব।

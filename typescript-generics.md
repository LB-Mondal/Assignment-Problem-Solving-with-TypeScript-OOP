 Title: TypeScript Generics and Asynchronous Promise <T> Response

 Introduction:

 TypeScript এর Generics এমন একটি শক্তিশালী ফিচার, যার মাধ্যমে আমরা বিভিন্ন Data Type এর জন্য একই Function, Class, Interface ব্যবহার করতে পারি। এর প্রধান উদ্দেশ্য হলো কোডের Reusability এবং Type Safety নিশ্চিত করা। Generics ব্যবহার করলে প্রতিটি Data type এর জন্য আলাদা ফাংশন তৈরী করার প্রয়োজন হয় না।


 Detailed Body Paragraphs with Code Examples:

Generics তৈরী করতে সাধারণত Angle Brackets “< >” ব্যবহার করা হয়। এর মধ্যে "T" একটি Type Parameter হিসেবে কাজ করে, যা পরবতীতে নির্দিষ্ট ডাটা টাইপ গ্রহণ করতে পারে।

কোডের উদাহরণ:

const getValue = <T>(value: T): T =>{

    return value;

};

const numberValue = getValue(100) //number;
const stringValue = getValue("Blog") //string;
const booleanValue = getValue(true) //boolean;

এখানে "T" হলো একটি Generic Type Parameter ফাংশনটির Number, String, Boolean যেকোন ডাটা টাইপ গ্রহণ করতে পারে এবং একই ডাটা টাইপ রিটার্ন করে। ফলে একই ফাংশন বিভিন্ন জায়গায় পুনরায় ব্যবহার করা সম্ভব।

Generics এবং Promise <T>

JavaScript এবং TypeScript এ Asynchronous Operation পরিচালনার জন্য Promise ব্যবহার করা হয়। TypeScript এ Promise <T> এর মাধ্যমে নির্দিষ্ট করা যাায় যে, Asynchronous Operation সম্পন্ন হওয়ার পর কী ধরনের ডাটা রিটার্ন হবে।

কোডের উদাহরণ:

async fucntion getUser(): Promise<string>{
    return "Blog";
}

এখানে Promise<string> নির্দেশ করছে যে ফাংশনটি একটি Promise return করবে যা সফলভাবে সম্পন্ন হলে স্ট্রিং ভ্যালু প্রদান করেবে।

Generics API থেকে Data Fetch করার ক্ষেত্রেও অনেক  গুরুত্বপূর্ণ।

কোডের উদাহরণ:

interface user{
    id:number;
    name:string;
}

async function fetchData<T>(data:T):Promise<T>{
    return data;
}

const uset:Promise<User> = fetchData<User>({
    id:1,
    name: "Blog",
});

এখানে fetchData<T>() একটি Generic Asynchronous Function আমরা User Type পাঠানোর কারণে ফাংশনটি Promise <User> Return করছে। ফলে জাভাস্ক্রিপট আমাদের ডাটা এর Structure সম্পর্কে Type safety প্রদান করে।

 Conclusion:
 Generics Typescript code কে আরও Flexible, Reusable and Maintainable করে। বিশেষ করে Promise<T> এর সঙ্গে Generics ব্যবহার করলে Asynchronous Data এর নির্দিষ্ট টাইপ নিশ্চিত করা যায়। বড় Application এবং API Development এর ক্ষেত্রে Generics ব্যবাহর করা অত্যন্ত গুরুত্বপূর্ণ।
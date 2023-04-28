
const items = [
	{
		name: "Item 1",
		description: "This is item 1.",
		image: "`item1.jpg`",
		price: 10.99
	},
	{
		name: "Item 2",
		description: "This is item 2.",
		image: "item2.jpg",
		price: 15.99
	},
	{
		name: "Item 3",
		description: "This is item 3.",
		image: "item3.jpg",
		price: 20.99
	}
];

const container = document.querySelector("main");

items.forEach(item => {
	const div = document.createElement("div");
	div.classList.add("item");
	
	const img = document.createElement("img");
	img.src = item.image;
	img.alt = item.name;
	
	const name = document.createElement("h2");
	name.textContent = item.name;
	
	const description = document.createElement("p");
	description.textContent = item.description;
	
	const price = document.createElement("p");
	price.textContent = `$${item.price}`;
	
	div.appendChild(img);
	div.appendChild(name);
	div.appendChild(description);
	div.appendChild(price);
	
	container.appendChild(div);
});




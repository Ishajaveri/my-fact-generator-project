document.getElementById('reveal-facts').addEventListener('click', function() {
    const facts = [
        "Creative Expression: An 18-year-old with a passion for sketching, showcasing a keen eye for detail and vivid imagination.",
        "Animal Enthusiast: A compassionate individual with a love for animals and nature.",
        "Adventurous Spirit: Enjoys traveling and dancing, reflecting an adventurous spirit and appreciation for rhythm and movement."
    ];

    const factsList = document.getElementById('fun-facts-list');
    factsList.innerHTML = ''; // Clear any existing facts

    facts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });
});

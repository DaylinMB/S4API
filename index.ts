const jokesElement = document.getElementById("jokesHere") as HTMLElement;
const btnJoke = document.getElementById("btnJoke") as HTMLButtonElement;

async function printJoke(): Promise<string> {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch dad joke');
        }

        const data = await response.json();
        return data.joke;
    } catch (error) {
        console.error('Error fetching dad joke:', error);
        return 'Failed to fetch dad joke :(';
    }
}

type JokeReport = {
    joke: string,
    score?: number,
    date: string
};

let reportAcudits: JokeReport[] = [];

async function jokesChuckNorris(): Promise<string> {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random", {
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Chuck Norris joke');
        }

        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
        return 'Failed to fetch Chuck Norris joke :(';
    }
}

function getRandomJoke(): void {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
        printJoke().then(joke => {
            if (jokesElement) {
                jokesElement.innerText = joke;
            }
        });
    } else {
        jokesChuckNorris().then(joke => {
            if (jokesElement) {
                jokesElement.innerText = joke;
            }
        });
    }
}

btnJoke.addEventListener("click", getRandomJoke);

function addJokeToReport(score: number): void {
    const jokeText = jokesElement?.innerText || "";
    const date = new Date().toISOString();
    const newReport: JokeReport = { joke: jokeText, score: score, date: date };

    const existingReportIndex = reportAcudits.findIndex(report => report.joke === jokeText);
    if (existingReportIndex >= 0) {
        reportAcudits[existingReportIndex].score = score;
        reportAcudits[existingReportIndex].date = date;
    } else {
        reportAcudits.push(newReport);
    }
    console.log(reportAcudits);
}

const btnSad = document.getElementById("btnEmoji1") as HTMLButtonElement;
const btnMeh = document.getElementById("btnEmoji2") as HTMLButtonElement;
const btnHappy = document.getElementById("btnEmoji3") as HTMLButtonElement;

btnSad.addEventListener("click", () => addJokeToReport(1));
btnMeh.addEventListener("click", () => addJokeToReport(2));
btnHappy.addEventListener("click", () => addJokeToReport(3));

document.addEventListener("DOMContentLoaded", () => {
    getRandomJoke();

    const weatherElement = document.getElementById("weatherd") as HTMLElement;
    const weatherIcon = document.getElementById("weatherIcon") as HTMLImageElement;

    printWeather();

    function getWeatherIcon(description: string): string {
        const iconMap: { [key: string]: string } = {
            "intervalos nubosos": "images/nubes.png",
            "nubes altas": "images/nubes.png",
            "soleado": "images/sol.png",
            "parcialmente nublado": "images/nubes.png",
            "despejado": "images/sol.png",
        };

        const lowerDescription = description.toLowerCase();
        return iconMap[lowerDescription] || "default.png";
    }

    function printWeather(): void {
        const url = 'https://www.el-tiempo.net/api/json/v2/home';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const bcnWeather = data.ciudades.find((city: any) => city.name === "Barcelona");

                if (bcnWeather && weatherElement && weatherIcon) {
                    const tempMax = bcnWeather.temperatures.max;
                    const tempMin = bcnWeather.temperatures.min;
                    const description = bcnWeather.stateSky.description;
                    weatherElement.textContent = `${tempMax}°C ${description}`;

                    const iconSrc = getWeatherIcon(description);
                    weatherIcon.src = `../${iconSrc}`;
                    weatherIcon.style.display = 'block';
                }
            })
            .catch(error => {
                console.log('ERROR', error);
                if (weatherElement) {
                    weatherElement.textContent = 'Error al cargar los datos del clima.';
                    weatherIcon.style.display = 'none';
                }
            });
    }
});

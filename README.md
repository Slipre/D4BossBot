# ***Diablo 4 Boss Notifications Telegram Bot***

## ***[PL]***

Bot stworzony do notyfikacji o pojawieniu się bossów w grze Diablo 4 poprzez Telegram. 
Umożliwia szybkie otrzymywanie informacji o aktywności bossów, aby gracze mogli planować swoje działania w grze.

### Funkcje
- Wysyłanie powiadomień o pojawieniu się bossów w Diablo 4.
- Możliwość dostosowania częstotliwości powiadomień.
- Integracja z Telegramem, aby łatwo otrzymywać powiadomienia na telefonie.
- Obsługa wysyłania powiadomień na publiczny kanał Telegrama 30, 10, 1 minutę przed oraz o czasie.

### Wymagania
- Node.js 14 lub nowszy
- Konto na Telegramie
- Zarejestrowany bot na Telegramie (uzyskaj token API poprzez [_BotFather_](https://telegram.me/BotFather))

### Instalacja

#### 1. Sklonuj repozytorium na swój komputer:

```bash
git clone https://github.com/slipre/D4BossBot.git
cd D4BossBot
```
#### 2. Zainstaluj wymagane zależności:

```bash
npm install
```

#### 3. Skonfiguruj bota:
Utwórz plik `.env` w katalogu głównym projektu i dodaj swoje dane konfiguracyjne:

```bash
TOKEN=Twój_Telegram_Bot_Token
API=Twój_API_Endpoint
PublicChannel=Twój_Publiczny_Kanał_ID
```

#### 4. Uruchom bota:

```bash
node .
```

### Konfiguracja

W pliku `.env` możesz ustawić następujące opcje:
- `TOKEN`: Token twojego bota Telegram, wymagany.
- `API`: Endpoint API, który bot wykorzystuje do sprawdzania statusu bossów, wymagany. Możesz wykorzystać swoje API lub skorzystać z api helltides.com
- `PublicChannel`: ID publicznego kanału na który bot ma wysyłać powiadomenia, opcjonalne.

### Użycie

#### Kanał publiczny

1. Dodaj bota do swojego kanału na Telegramie.
2. Bot będzie wysyłał powiadomienie 30, 10, 1 minutę przed pojawieniem się bossa oraz o czasie.

#### Wiadomości prywatne

1. Napisz do bota `/help` aby poznać jego komendy
2. Skonfiguruj bota wedle swoich preferencji odnośnie powiadomień.
3. Bot będzie wysyłał bezpośrednio do Ciebie powiadomienia według twoich ustawień. 


### Contributing
Jeśli masz pomysły na ulepszenie bota, proszę o przesłanie pull requestów lub otwarcie issues.

### Kontakt
Jeśli masz pytania lub potrzebujesz pomocy, skontaktuj się ze mną.

---

## [EN]

A bot created to notify about the appearance of bosses in Diablo 4 via Telegram. It allows players to quickly receive information about boss activity to plan their actions in the game.

### Features
- Sends notifications about the appearance of bosses in Diablo 4.
- Allows customization of notification frequency.
- Integrates with Telegram for easy notification delivery to your phone.
- Supports sending notifications to a public Telegram channel 30, 10, or 1 minute ahead of time and on time.

### Requirements
- Node.js 14 or newer
- Telegram account
- Registered bot on Telegram (get the API token via [_BotFather_](https://telegram.me/BotFather))

### Installation

#### 1. Clone the repository to your computer:

```bash
git clone https://github.com/slipre/D4BossBot.git
cd D4BossBot
```
#### 2. Install the required dependencies:

```bash
npm install
```
#### 3. Configure the bot:

- Create a `.env` file in the root directory of the project and add your configuration details:

```bash
TOKEN=Your_Telegram_Bot_Token
API=Your_API_Endpoint
PublicChannel=Your_Public_Channel_ID
```

#### 4. Run the bot:

```bash
node .
```

###  Configuration

In the `.env` file, you can set the following options:

- `TOKEN`: Your Telegram bot token, required.
- `API`: The API endpoint used by the bot to check boss status, required. You can use your own API or use the api helltides.com.
- `PublicChannel`: The ID of the public Telegram channel where the bot will send notifications, required.

###  Usage

#### Public Channel

1. Add the bot to your Telegram channel.
2. The bot will send notifications 30, 10, and 1 minute before a boss appears, as well as at the time of appearance.

#### Private Messages

1. Write `/help` to the bot to learn its commands.
2. Configure the bot according to your notification preferences.
3. The bot will send notifications directly to you according to your settings.

### Contributing

If you have any ideas for improving the bot, please submit a pull request or open an issue.

### Contact

If you have any questions or need help, feel free to contact me.
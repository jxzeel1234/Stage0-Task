# Cat Fact API

This simple API fetches a random cat fact from [catfact.ninja](https://catfact.ninja) and returns it with user information.

## Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "name": "Adegoke Yusrah",
    "email": "adegokeyusrah06@gmail.com"
  },
  "fact": "Cats have five toes on their front paws, but only four on the back ones.",
  "timestamp": "2025-10-17T14:30:00.000Z"
}

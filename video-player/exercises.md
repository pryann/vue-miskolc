# Projektfeladatok

## 02

- Alakítsd át a **VideoPlayer** alkalmazás kódját úgy, hogy a `videos` és a `selectedVideo` egy közös store-ban legyen
  eltárolva
- Ehhez hozd létre a store fájlt a szükséges függvényekkel együtt
- A komponensek pedig a store-t használják, ahol erre szükség van a _props_ és _events_ helyett
- Alakítsd át a komponensek kódját a feladatnak megfelelően

## 03

- Alakítsd át a **UserManager** alkalmazást, hogy az `EditUserModal` és a `CreateNewUser` komponensek is egy
  újrafelhasználható `InputField` komponenst használjanak az űrlapelemek csoportjai (label + input) esetében
- Az `InputField` komponens kapjon meg minden props-ot, amelyet az alkalmazás során szükségesnek ítélsz

## 04

- Alakítsd át a **UserManager** alkalmazást, hogy a `CreateUserForm` és az `EditUserModal` egy `UserForm` nevű
  komponenst használjanak fel. Ez a komponens tartalmazza a felhasználók módosítására és létrehozására is szolgáló
  kódot. Így nem kell az űrlapot átmásolni, hanem a teljes űrlap mint egy külön komponens újra felhasználható lesz.
  Használd az elő feladatban létrehozott `InputField` komponenst is

## 05

- Alakítsd át a **UserManager** alkalmazást, hogy ne _confirm_ ablakot használj, hanem
  a `vue3-promise-dialog` csomagot: [https://github.com/rlemaigre/vue3-promise-dialog?tab=readme-ov-file](https://github.com/rlemaigre/vue3-promise-dialog?tab=readme-ov-file)

## 06

- Alakítsd át a **UserManager** alkalmazást, hogy az adatokat regulárisok segítségével validálod.
- A megszorítások a következők:
    - `firstName`: kötelező, minimum 2 karakter hosszú
    - `lastName`: kötelező, minimum 2 karakter hosszú
    - `email`: kötelező, szabványos e-mail-formátum
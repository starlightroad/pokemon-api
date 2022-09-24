# Pokémon API

A Pokemon API that contains Pokemon data from generation 1. This project was created so that I can get more hands-on experience with Node.js and Mongoose.

## Get all Pokemon

Shows data of all Pokemon.

### GET https://pokemon-api.com/api/v1/pokemon

#### Query Parameters

**no** number

The number of the Pokemon.

Examples:

- https://pokemon-api.com/api/v1/pokemon?no=1
- https://pokemon-api.com/api/v1/pokemon?no=001

**name** string

The name of the Pokemon. The table below shows some Pokemon whose name were modified.

| Name     | New Name       |
| -------- | -------------- |
| Nidoran♂ | nidoran-male   |
| Nidoran♀ | nidoran-female |
| Mr. Mime | mr-mime        |

Examples:

- https://pokemon-api.com/api/v1/pokemon?name=charmander
- https://pokemon-api.com/api/v1/pokemon?name=nidoran-male
- https://pokemon-api.com/api/v1/pokemon?name=mr-mime

**species** string

The species of the Pokemon.

Example:

- https://pokemon-api.com/api/v1/pokemon?species=fairy

**type** array

The type of the Pokemon. You are able to query multiple types. The order does not matter.

Allowed values: bug, dragon, electric, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, water

Examples:

- https://pokemon-api.com/api/v1/pokemon?type=water
- https://pokemon-api.com/api/v1/pokemon?type=flying&type=fire

**stats_hp** string

Shows Pokemon whose HP stat matches the specified value.

Allowed filters: lt, gt, lte, gte

Example:

- https://pokemon-api.com/api/v1/pokemon?stats_hp[gte]=100

**stats_attack** number

Shows Pokemon whose attack stat matches the specified value.

Allowed filters: lt, gt, lte, gte

Example:

- https://pokemon-api.com/api/v1/pokemon?stats_attack[gte]=100

**stats_defense** number

Shows Pokemon whose defense stat matches the specified value.

Allowed filters: lt, gt, lte, gte

Example:

- https://pokemon-api.com/api/v1/pokemon?stats_defense[gte]=100

**stats_speed** number

Shows Pokemon whose speed stat matches the specified value.

Allowed filters: lt, gt, lte, gte

Example:

- https://pokemon-api.com/api/v1/pokemon?stats_speed[gte]=100

**stats_special** number

Shows Pokemon whose special stat matches the specified value.

Allowed filters: lt, gt, lte, gte

Example:

- https://pokemon-api.com/api/v1/pokemon?stats_special[gte]=100

**stats_total** number

Shows Pokemon whose total stat matches the specified value.

Allowed filters: lt, gt, lte, gte

Example:

- https://pokemon-api.com/api/v1/pokemon?stats_total[gte]=120

## Get a Pokemon

Shows data about a Pokemon.

### GET https://pokemon-api.com/api/v1/pokemon/{id}

#### Query Parameters

**id** string

The ID or name of the Pokemon.

Examples:

- https://pokemon-api.com/api/v1/pokemon/25
- https://pokemon-api.com/api/v1/pokemon/006
- https://pokemon-api.com/api/v1/pokemon/gengar
- https://pokemon-api.com/api/v1/pokemon/nidoran-male

## Get the top 5 Pokemon

Shows Pokemon with the best overall stats (total stat). The Pokemon are listed in a descending order.

### GET https://pokemon-api.com/api/v1/pokemon/top-5

#### Query Parameters

There are no query parameters for this request.

## Get all moves

Shows data of all moves.

### GET https://pokemon-api.com/api/v1/moves

#### Query Parameters

**\_id** string

The ID of the move.

Example:

- https://pokemon-api.com/api/v1/moves?_id=62f8d181cb1a94396dbd46e6

**name** string

Shows a move that matches the name value.

Examples:

- https://pokemon-api.com/api/v1/moves?name=psychic
- https://pokemon-api.com/api/v1/moves?name=thunder+punch

**type** string

Shows moves based on the type value.

Allowed values: bug, dragon, electric, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, water

Example:

- https://pokemon-api.com/api/v1/moves?type=grass

**category** string

Shows moves based on the category value.

Allowed values: status, physical, special

Example:

- https://pokemon-api.com/api/v1/moves?category=special

**pp** number

Shows moves based on the power point value.

Examples:

- https://pokemon-api.com/api/v1/moves?pp=20
- https://pokemon-api.com/api/v1/moves?pp[gte]=20
- https://pokemon-api.com/api/v1/moves?pp[lte]=15

**power** number

Shows moves based on the power value.

Examples:

- https://pokemon-api.com/api/v1/moves?power=80
- https://pokemon-api.com/api/v1/moves?power[gte]=100

**accuracy** number

Shows moves based on the accuracy value.

Examples:

- https://pokemon-api.com/api/v1/moves?accuracy=100
- https://pokemon-api.com/api/v1/moves?accuracy[gte]=75

**tm** number

Shows a move that matches the TM value.

Example:

- https://pokemon-api.com/api/v1/moves?tm=22

**hm** number

Shows a move that matches the HM value.

Example:

- https://pokemon-api.com/api/v1/moves?hm=3

## Get a move

Shows data about a move.

### GET https://pokemon-api.com/api/v1/moves/{id}

#### Query Parameters

**id** string

The ID of the move.

Example:

- https://pokemon-api.com/api/v1/moves/62f8d181cb1a94396dbd469b

## Get all TMs

Shows data about all TMs.

### GET https://pokemon-api.com/api/v1/moves/tms

#### Query Parameters

**tm** string

Shows a TM that matches the TM value.

Example:

- https://pokemon-api.com/api/v1/moves/tms?tm=5
- https://pokemon-api.com/api/v1/moves/tms?tm=09

**name** string

Shows a TM that matches the name value.

Examples:

- https://pokemon-api.com/api/v1/moves/tms?name=blizzard
- https://pokemon-api.com/api/v1/moves/tms?name=swords+dance

**type** string

Shows TMs based on the type value.

Allowed values: bug, dragon, electric, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, water

Example:

- https://pokemon-api.com/api/v1/moves/tms?type=grass

**category** string

Shows TMs based on the category value.

Allowed values: status, physical, special

Example:

- https://pokemon-api.com/api/v1/moves/tms?category=special

**pp** number

Shows TMs based on the power point value.

Examples:

- https://pokemon-api.com/api/v1/moves/tms?pp=20
- https://pokemon-api.com/api/v1/moves/tms?pp[gte]=20
- https://pokemon-api.com/api/v1/moves/tms?pp[lte]=15

**power** number

Shows TMs based on the power value.

Examples:

- https://pokemon-api.com/api/v1/moves/tms?power=80
- https://pokemon-api.com/api/v1/moves/tms?power[gte]=100

**accuracy** number

Shows TMs based on the accuracy value.

Examples:

- https://pokemon-api.com/api/v1/moves/tms?accuracy=100
- https://pokemon-api.com/api/v1/moves/tms?accuracy[gte]=75

## Get a TM

Shows data about a TM.

### GET https://pokemon-api.com/api/v1/moves/tms/{id}

#### Query Parameters

**id** string

The TM number.

Examples:

- https://pokemon-api.com/api/v1/moves/tms/3
- https://pokemon-api.com/api/v1/moves/tms/09

## Get all HMs

Shows data about all HMs.

### GET https://pokemon-api.com/api/v1/moves/hms

#### Query Parameters

**hm** string

Shows an HM that matches the HM value.

Example:

- https://pokemon-api.com/api/v1/moves/hms?hm=5
- https://pokemon-api.com/api/v1/moves/hms?hm=01

**name** string

Shows an HM that matches the name value.

Examples:

- https://pokemon-api.com/api/v1/moves/hms?name=surf

**type** string

Shows HMs based on the type value.

Allowed values: bug, dragon, electric, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, water

Example:

- https://pokemon-api.com/api/v1/moves/hms?type=normal

**category** string

Shows HMs based on the category value.

Allowed values: status, physical, special

Example:

- https://pokemon-api.com/api/v1/moves/hms?category=status

**pp** number

Shows HMs based on the power point value.

Examples:

- https://pokemon-api.com/api/v1/moves/hms?pp=30
- https://pokemon-api.com/api/v1/moves/hms?pp[gte]=20
- https://pokemon-api.com/api/v1/moves/hms?pp[lte]=15

**power** number

Shows HMs based on the power value.

Examples:

- https://pokemon-api.com/api/v1/moves/hms?power=50
- https://pokemon-api.com/api/v1/moves/hms?power[gte]=90

**accuracy** number

Shows HMs based on the accuracy value.

Examples:

- https://pokemon-api.com/api/v1/moves/hms?accuracy=100
- https://pokemon-api.com/api/v1/moves/hms?accuracy[gte]=75

## Get an HM

Shows data about an HM.

### GET https://pokemon-api.com/api/v1/moves/hms/{id}

#### Query Parameters

**id** string

The HM number.

Examples:

- https://pokemon-api.com/api/v1/moves/hms/3
- https://pokemon-api.com/api/v1/moves/hms/01

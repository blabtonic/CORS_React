## Release
The Release resource represents a particular physical or digital object released by one or more Artists
#### GET
```javascript
    db.getArtist = function(artist, callback) {
        return client.get('/artists/' + artist, callback);
    };
```

## Artist
The Artist resource represents a person in the Discogs database who contributed to a Release in some capacity.
#### GET
```javascript
    db.getArtist = function(artist, callback) {
        return client.get('/artists/' + artist, callback);
    };
```

## Artist Release
Returns a list of Releases and Masters associated with the Artist.
Accepts Pagination.
#### GET
```javascript
    db.getArtistReleases = function(artist, params, callback) {
        var path = '/artists/' + artist + '/releases';
        if ((arguments.length === 2) && (typeof params === 'function')) {
            callback = params;
        } else {
            path = util.addParams(path, params);
        }
        return client.get(path, callback);
    };
```

## Label
The Label resource represents a label, company, recording studio, location, or other entity involved with Artists and Releases. Labels were recently expanded in scope to include things that aren’t labels – the name is an artifact of this history.
#### GET
```javascript
    db.getLabel = function(label, callback) {
        return client.get('/labels/' + label, callback);
    };
```

## Image

#### GET
```javascript
    db.getImage = function(url, callback) {
        return client.get({url: url, encoding: 'binary', queue: false, json: false}, callback);
    };
```

## Label Releases
Returns a list of Releases associated with the label. Accepts Pagination parameters.
#### GET
```javascript
    db.getLabelReleases = function(label, params, callback) {
        var path = '/labels/' + label + '/releases';
        if ((arguments.length === 2) && (typeof params === 'function')) {
            callback = params;
        } else {
            path = util.addParams(path, params);
        }
        return client.get(path, callback);
    };
```

## Master Versions
Retrieves a list of all Releases that are versions of this master. Accepts Pagination parameters.
#### GET
```javascript
    db.getMasterVersions = function(master, params, callback) {
        var path = '/masters/' + master + '/versions';
        if ((arguments.length === 2) && (typeof params === 'function')) {
            callback = params;
        } else {
            path = util.addParams(path, params);
        }
        return client.get(path, callback);
    };
```
## Master
The Master resource represents a set of similar Releases. Masters (also known as “master releases”) have a “main release” which is often the chronologically earliest.
#### GET
```javascript
    db.getMaster = function(master, callback) {
        return client.get('/masters/' + master, callback);
    };
```
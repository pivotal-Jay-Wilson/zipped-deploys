
# Deploying zip files to Cloud Foundry
## zip and run a static site

```
ditto -c -k ./static static.zip
```

```
cf push my-static -p ./static.zip -b staticfile_buildpack -m 64m -k 64m -i 1 --random-route
```

## zip and run a static site

```
ditto -c -k ./node node.zip
```
```
cf push my-node -p ./node.zip -m 256m -k 256m -i 1 --random-route
zipinfo node.zip
````

## This will ensure that the index file is in the root of the zip
### run this: 
```
zipinfo static.zip
```
### you should see this:
```
Archive:  static.zip
Zip file size: 272 bytes, number of entries: 1
-rw-r--r--  2.1 unx      143 bX defN 19-Jul-12 15:24 index.html
1 file, 143 bytes uncompressed, 110 bytes compressed:  23.1%
```
not this:
```
Archive:  static.zip
Zip file size: 404 bytes, number of entries: 2
drwxr-xr-x  2.1 unx        0 bx stor 19-Jul-12 15:23 static/
-rw-r--r--  2.1 unx      143 bX defN 19-Jul-12 15:24 static/index.html
2 files, 143 bytes uncompressed, 110 bytes compressed:  23.1%
```
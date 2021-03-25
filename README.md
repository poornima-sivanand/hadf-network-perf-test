# hadf-network-perf-test

## How to run this repo

STEP 1: Create a private AWS s3 bucket and upload a small sized, a medium sized and a large sized pdf file into the bucket

STEP 2: Clone this repo locally

STEP 3: Install docker

STEP 4: Build the image using:

    `docker build -t hadf-network-perf-test:<tag> .`

STEP 5: Run the image using:

    `docker run -it -p 8080:8080 -e 'ACCESS_KEY_ID={AWS_ACCESS_ID}' -e 'SECRET_ACCESS_KEY={AWS_SECRT_ACCESS_KEY}' -e 'REGION=ca-central-1' -e 'BUCKET_PATH={S3BucketName/subFolder(ifany)}' hadf-network-perf-test:<tag>`

STEP 6: Access the files at http://localhost:8080/small, http://localhost:8080/medium, http://localhost:8080/large
    
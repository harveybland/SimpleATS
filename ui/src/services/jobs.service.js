async function getJobListing() {
    return await fetch('http://localhost:4000/api/jobs').then(o => o.json());
}

module.exports.getJobListing = getJobListing;
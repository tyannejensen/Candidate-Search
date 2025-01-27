// TODO: Create an interface for the Candidate objects returned by the API
// {
//     "login": "ossgrp",
//     "id": 99777398,
//     "node_id": "O_kgDOBfJ7dg",
//     "avatar_url": "https://avatars.githubusercontent.com/u/99777398?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/ossgrp",
//     "html_url": "https://github.com/ossgrp",
//     "followers_url": "https://api.github.com/users/ossgrp/followers",
//     "following_url": "https://api.github.com/users/ossgrp/following{/other_user}",
//     "gists_url": "https://api.github.com/users/ossgrp/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/ossgrp/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/ossgrp/subscriptions",
//     "organizations_url": "https://api.github.com/users/ossgrp/orgs",
//     "repos_url": "https://api.github.com/users/ossgrp/repos",
//     "events_url": "https://api.github.com/users/ossgrp/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/ossgrp/received_events",
//     "type": "Organization",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 10,
//     "public_gists": 0,
//     "followers": 0,
//     "following": 0,
//     "created_at": "2022-02-16T02:12:10Z",
//     "updated_at": "2022-02-16T02:12:10Z"
//   }

export interface Candidate {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}
import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

import { Character, CharacterList, Location, LocationList, Episode, EpisodeList } from "./types";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: graphqlRequestBaseQuery({ url: "https://rickandmortyapi.com/graphql" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterList, { page?: number; filter?: { name?: string; status?: string } }>({
      query: (args) => ({
        document: gql`
          query ($page: Int, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
              info {
                pages
              }
              results {
                id
                name
                status
                image
                location {
                  name
                }
              }
            }
          }
        `,
        variables: args,
      }),
    }),

    getCharacterById: builder.query<Character, number>({
      query: (id) => ({
        document: gql`
          query ($id: ID!) {
            character(id: $id) {
              id
              name
              status
              image
              origin {
                name
              }
              location {
                id
                name
              }
              episode {
                id
                name
                episode
              }
            }
          }
        `,
        variables: { id },
      }),
    }),

    getLocations: builder.query<LocationList, { page: number; filter?: { name?: string } }>({
      query: (args) => ({
        document: gql`
          query ($page: Int, $filter: FilterLocation) {
            locations(page: $page, filter: $filter) {
              info {
                pages
              }
              results {
                id
                name
                type
                dimension
              }
            }
          }
        `,
        variables: args,
      }),
    }),

    getLocationById: builder.query<Location, number>({
      query: (id) => ({
        document: gql`
          query ($id: ID!) {
            location(id: $id) {
              id
              name
              type
              dimension
              residents {
                id
                name
              }
            }
          }
        `,
        variables: { id },
      }),
    }),

    getEpisodes: builder.query<EpisodeList, { page?: number; filter?: { name?: string; episode?: string } }>({
      query: (args) => ({
        document: gql`
          query ($page: Int, $filter: FilterEpisode) {
            episodes(page: $page, filter: $filter) {
              info {
                pages
              }
              results {
                id
                name
                air_date
                episode
              }
            }
          }
        `,
        variables: args,
      }),
    }),

    getEpisodeById: builder.query<Episode, number>({
      query: (id) => ({
        document: gql`
          query ($id: ID!) {
            episode(id: $id) {
              id
              name
              air_date
              episode
              characters {
                id
                name
              }
            }
          }
        `,
        variables: { id },
      }),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useGetEpisodesQuery,
  useGetEpisodeByIdQuery,
} = rickAndMortyApi;

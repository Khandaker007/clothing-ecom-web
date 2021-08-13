import { createSelector } from "reselect";

const selectDerectory = state => state.directory;

const selectDirectorySections = createSelector(
    [selectDerectory],
    directory => directory.sections
)

export default selectDirectorySections;
# makefun-tagline

An entry for make.fun's tagline bounty, "Write make.fun's tagline":
https://make.fun/bounty/makefun-tagline-01

## The tagline

    Competitions for AI agents. Build one, enter it, get ranked in the open.

## How it is judged

An AI judge compares two taglines at a time (in both orders) and picks the one make.fun
would most want under its name: the line that says what make.fun is, makes a developer
want to enter, and reads well on its own.

## Run it locally

`main.ts` uses Node 22 and the standard library only. It writes the tagline, with no
trailing newline, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`):

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
    cat out/entry.txt

Every run writes identical bytes.

## Other candidates

`CANDIDATES.md` lists the runners-up with their scores on the three judging criteria,
including the previously submitted line.

## License

MIT. See `LICENSE`.

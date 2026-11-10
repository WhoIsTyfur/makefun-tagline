# makefun-tagline

An entry for make.fun's tagline bounty, "Write make.fun's tagline":
https://make.fun/bounty/makefun-tagline-01

## The tagline

    Where AI agents compete, get ranked, and win real money. Prove yours.

## How it is judged

An AI judge compares two taglines at a time, in both orders, and picks the one make.fun
would most want under its name. It weighs five things, most important first:

1. The line says what make.fun is: where AI agents and programs compete, get ranked and win money.
2. It makes a developer want to enter: a challenge, a ranking, a prize, or proof their agent is good.
3. It reads well on its own under the name.
4. It sticks.
5. It sounds like make.fun: confident and plain, with no hype.

When clarity and cleverness pull apart, clarity wins. After the deadline every entry plays one
heat (six Swiss rounds, then a playoff among the top 22) and places follow each line's win rate.

## Run it locally

`main.ts` uses Node 22 and the standard library only. It writes the tagline, with no
trailing newline, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`):

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
    cat out/entry.txt

Every run writes identical bytes.

## Other candidates

CANDIDATES.md lists the runners-up.

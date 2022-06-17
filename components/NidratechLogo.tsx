import type { SVGProps } from 'react';

const NidratechLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={489} height={147} viewBox="0 0 489 147" {...props}>
    <image
      x={7}
      y={79}
      width={476}
      height={64}
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdwAAABACAYAAACwcMZ5AAAOFklEQVR4nO2djXHbuhKFkTdpAK8EugS7BLkEuQSpBKkEqwSrhKgEuwSrBKsFtHAH8qFCK1gAJAEQP/vNZDJz4ytTJLEH2D1Y/JJSSiHEo/jJRSl1EQ1C3I8rSqmPKXfE9plzmHo9KYn13U2UcD9cSClXhh85K6VUhN/VCSG60J+7BK5nn/I9nIF+zOelfrmUUt8fiXdCGn7kem1LjLMYcTkWlmtVv/EP7/f/IKV8iDHIQ4HAdH/dmg+l1POMX2O6Hz2/InzmZL6f6w8u+HPG3x8ZTJyifHcTd/fjA/fhtGQQG4Plnd4LIQ4RfuVaCPEa4XOXwDU2k72HM9Dv7JzYNQq8byvcG9NEzwjG2eVujMXWihhxORbUtX78Jn6hxP/wlNkXYez0K5bb4JFS6oFxKkl4AtEHkx3uwUEpdcz8mtfEf99EElymMZDV2OCPaRXrS/85mjcppY4xxxqyTDH5n+WzH6WUb+V/xebRA2MnhPiUUn5JKTcN3pAOQeGTSNkuDtJQ1LPppJSUGDOMEy20iOdfiAdzxNaEfj/fpZTvuY6xHLAJrmbTaICulV54WhXeRwSFXQbXco/rebDgMqOR3+wgtCnG/Apj7I801LxaxyW4AgE6d7MBM45eeN+RYmqN1wyzN07BbfRZMRPBSvNzoTr9Glk11o4BVA33nvfcTVQFE8Ik8Tj4uxvhxlxhUOwXqm/GMIg8Dkwgthm2zt50Mw12QUC62EdMNzBQheLUO08DsyYmEOfA1x+Kxd8BECy+YlXrK7S9AepmuByaLQeuWznwiPikjTvEl20B/okk+Aoum6giEchk8OMzMED6QbF2CI/ssxhKqW2B3/2e62fiHvQuXOr7r/RKN/X3NuCb6gsquAiqwV3sllWNytFUU5PRB+/9q8c7pcX96GOmxEJreI8Og/G19hBfHV/05zQvuj4p5R5toqplC0HVqG9OEJIHIcTWI7BuajLJ4R4c8f1tA32zZE0XaWJTwDJds2RPBUMBEXz3EFs9adMZy/3UnQv9+EKG6Pl+0m9Ai27z7+4YwRXYYtH8TSuJwcB4wECzpa2qEl3x9/tvMemgeF2wPmoaTwrPyjRJ4vHH/MNAbG3lpDOE9hCyPKgzBBDeF0d8eWvdwTxWcAWCExfCC0QPNJQFbLPa6kRXfH/3o0N0k39ny1agIwKiaZX7yOOPMfDqEFu9mn2K2QhHZ9U84kvT7uUpgitbv2klgwH37JFmrW4lBdGlvvdqgdk3VV8/Dv42rRh4lcvcQEnE9k5sMdmOziC+UKIrl5jc5oJLcKmbptNvf+q8JfUzSLPaRLfWTIYtrZ66lmv6fbd2nFjlngw/s+YJLyP+bv2xeWuSO4Tx3tpEd91qatkluFtLcFqxiapsHKIrK+qzewPBgHL6rlLVchFwTL/r/nkYzVO8ymUw6bItfBbbjjMQXSqFnWPzmehYBRcONlvdi01UhQPRpWaiq4pTy1QgSNXRyfR7LqiD3cAYND0fHneMrUXjUnvrb0B0X0z/5OFqrhJnDRcBwLb3j01U5WNzF9Y6EzWlasWYU1OmMmggfw8VIE3/vWvd8dkyiLnU2PxIVbN1gQnj8Fquxqpcri81XqYp3BwqQLGJqnBQM6QGQFdpFoOaYacQMWoVTY2xE5unmDuoco9yZCWX4IAszYtS6qXVs9bFSJeyLfXIJqrCwaSqmXqLrbtQgpUjtRXIeP8d5inur9wYWN1S7+ghN0GDSVOvaqkJZTN4Cy4GPZuo6sa2yq3xtJrk5wMjW2ASSVcwop4NnyLUHlRmg9q7zWTCqH24niYqDgCF4jAT1VgvpCaPMT0JlFnKaiLBqsX0M026PVvFcW5y0A5STHhGN77wMFHxcX5lQ82QeSI1k5F9k02YVsHcX7ktbOOQV7eZM6XTlI+J6o1NVMVCPld2xc7GtBr1TgMiA2FawfBkqB2oZ33k1W3+TBJcYDNRPbbcvqtkkLq0PdeaoCaFwWu7g+PM7jmNDJQmcV5xVql+BsdummhyX2tpTBZcDxPVesljz5hZLLZHNTEpRcrVN9kX6uc5rVw/5PhjB3AZzFnh+pioXtlEVSRk56lavqAtPR7pQHKqb/Ko1bTFPMX9leuHmiDy6rYQZgmuYBNVrZAiUNG+T0pwY6STqb7JU1cl3F+5TVhwC2e24Ao2UVUHygXU9qBaBJfKvMQIXsZD5qf2usUklw+nbw9KcJPvJ2emEURwAZuo6oIS3OKzFZbmE2LGqpP6XR0h7nO3cHB/5fagFi3Ntkosjd+hrldP16WUWnTfiRfjaqJqtWl1gdS8xYAy853H1lQ9ILdxzPzcE9FPd8MpxnEsOEk5+zrUHZ6DpgU3Q3MumQUMJrgCJiqILtVXWZuo/jmCjMmSc437OzE4qQERo3GAKRic5gZJ/f9LKU+GZ3Ttr9x6EB7J+0K/9znA5Ij33hZ0bnfIlPIVTxMVN1xnkgPzHjU4L6HPD0Xq2pTtCTXhpD6Hdwa0A9dvCyK44Ao+zq92inxuEFvbSibGkWZeh8xPhc1TDFMWUQQXuExUfLJQmRSXwsJKk/IWCDR9D1r3tByhFjptTZmnWHQZJjOC1nCHeJioNqjnsomKiQKMJjtHw46z5ei7OVCCF0NwTZPXNTez92YpkxnXXxsjmuAKfxPVOVJnHyZzIrlDHzHBW3vsGdZi+xy66bulb3LwBvOY2B4NAr9i85QfSqnnEq6ToPltYEqpXxlcxg3ENWP5KqrgCtSZpJQHy1YMXc994sCQHSkG8lLuUBFLbEFss5Tpc00r6l2k2jSTGL0oYdtL+cSs4d5QSu0taRs2UZVFDWkwXbN9inicmUn8omVy8LmmCSv3V64L4/vKrXPLIYngghdH9yI2UeUFtcItOROhhekJE8Ao4LAOUyo7dj2V6q/MW4TqoZVjM6slekq5B7WmFzZR5Y9jn3RpgnuG0B4TlS0ogVOROxpR323H5qlqOBMTYe5rUAjJBFf8NVHtLX2V2USVB9SMWRVWa79ErNP+g6VvsrAYB2Nz7a/MY6oKqBXu2tFsiMmEpIIrviP2EYHJZqJ6SBUkGSNJTiUJ5S5Eu0ZTSaJDPTVV1iTXva9r7q9cBdQz7NiRXgYpa7g3PExUS7pXmbRH180GZQhqMvCa0FSSq+BuuJ1q+WARQo1BrtUXwCKCC6wmKiklH+e3ABAnKjjnvEqybX+Jbsiz9E3OBQ7IdUCNQe4sVgDJU8o9niaqc+iG8owT0vQT4ei6YAz8ASZxXSU4GpIKeB+JJyorwliTMrXOxIPqLHZt58nxMm8WE1zhZ6J6g+jyiRgJwJ5NSjhKOFKx77hkWqHv9HF2MepcyApQaet9yvcXR/Z9Gf6JA3IFWDqLCW7nmT9LppSvIADYZt7vvHk/Gba0aPYDGTUuKrUsI6aWqUlK8skiJhR8bF/dUM93hX3gTKYsLriCTVRZgEkN5RwvJsuA7S/U5GAdOiA5sgJLTVJsAZnNU4WDd5yKl6+5LlB4MpCJ4AI2US3LruTV7R17SwvKt8ABiRJbtVT61nJOrmBzTTVQWcEux2eMpi96y+dXy0dHZiO4SAe+WALlhs/4jMPgGDsTxRnXPFLL1HedQm6rW9fv33CJpnywyqUyGa+Ru5qNAu9bv2DqMOltUnhzWuEKpC1tHVPeuFF3WO4Gg4kiO9hglUcFpF2IgGTpmywyFlzur1wPtkxOTgfC7AzjpBfepkocWQmuYBNVUnAf3y2icSq8JaA1tRzg88mtQEt3/cEqn1zlJr4cJgJ4x6hYKXOIlVjFUhmlVP3NsyE7wRWex/klvqTqGIgt2Te59LNUHQGpQ0vISWBmTq2Sc9lCRV3HY04pR2Y62FtOPuclRRdiS01sVYv7wrMUXGAzUa34OL/peIit5qWGftYISDZH59QSBbVKvORS80Z2wtbwnqmDrePo0+Si6xBbgTOpm+v9nK3gepiouJY7Aaxsvhz3b1vZ6TK2OvToiVumW4Eo2DxVOZ6x8jOV/0VK+eoQ21Orx7DmvML1MVExnugUqJTyj6WVZs++tm5EjvdoNSG1vLbcw9w6cp1szv/E18JEAu/4s+VZdxDdkA79H2hBl1J+OnYBnEsvVc0ha8EVfiYqxgKE9g2rWlcacV/rzBPfizykfaRbkmx/mVuajM1T7eAhugJllK+QTSgGMebTkTk7pzyfOkeyF1zhNlExd2CmucNs88szsG4bSPPMbvuIlDwVVHLNDFDX1XH3n7rwFN1u2IRiamlBj4XBZN4VY3SmpWmxFUsfXjCSF8ygqtq3FTDF0+HPWPfpBQap6g+I0HVpKeWBSHld2z5i/64NSqAuuda99apbSvlhOUWohIMpohEzzTqB89z3CIfCPGE3h23F2aHW+ob3ozfZ/XMyGDJAHT7vEe+Sr1BXmzkbSzGC63GcX6ks6bY+wC3Y0qzzYDmk4Rp4qPtRmFnqnhMhuNf+yi06RgfktOMhSDYPk6xnTC59JhQ/jnUM5Ke7VGjAnEURKeUeNlEFQw+AB52qby3FM7Ptoy1tlrXgwgvB/ZUbQn2zR4o55YRKIU4/sdj+pCjBFWyimssRg+C55RXNjLaP5Oq2kIkLbxFqEC16SqkHR+e1EKhBjGktc+ZFcYIr2EQ1lhNWdP9XSm35MP8btuDzT4rR0Te5lBoodZ3cX7kBUEfthTfkhLvPPD4gxrRcnrBSkmnqnipNVDPoJyBnCMls80XNoMZ1IOp3V5f3ndHDdsh8EfcZ3/lIfJdNgccwMiPBqvPq3UAjjDVqt2OaYqiBwSq7rXA586v1G8AwDMPctrxJYhGjsCq+sMBORAjxHxm1Umo7Ko2oAAAAAElFTkSuQmCC"
    />
    <image
      data-name="Ellipse 1"
      x={51}
      y={3}
      width={60}
      height={59}
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA7CAYAAAAn+enKAAADm0lEQVRogeWbS0gVURjHf05FLbQiMkiKlCwLwjQpKGxhLYxaZBFBgQZt2kTt3UQPodbSomhTQdEis0VJYW1KAqGHVmIvspdBRm8IqSy+6ZvLZbyPuXcezp35wUW5DOf8f3PPvTNzzneKHrfNxydmAauBFcAyoAKYC8wEirXLH8AX4D3wEngE3APuAJ/8iDXZ4/bk7O0AtgF1gJHl+GJ9zQNWAtv1/THgLnAROAe88SpgtkBOKAI2At3AEHBMw7tp29A2jmqb3dpHkduwboWbdAheAdZ7dALtGNq29HFf+3TVWD4sArqAS0CN14YZWK59dmmGnMlVWIbUXqAf2BCUZQqk74eaJadhnouw/Lp2AO3ANLeJPWCqZunQbI5wKlyulwpX3x+faNJsFV4JLwV6gCUhlLWQbLc1a0ayCVfqJaEskNjuKNOslZlaySRcqr+GhSBrUaaZS9MdkE54EnAh29kKKZWaXRwcCx8AGgpQ1qJBHcaRSlhu6VoDj+g94rDK3qpdWIbByXTDocAQhxN2F7vw7oBvFf2mRp0SJAtPichQttOqbibJwi16RxU1xKk5lfC+CMpa7Lf+sYRrgeoJjeQv1eqYEG6JqGgyu0gS3hyKSP5iPumJ8EKnj1YFzgJxFeH6GMha1BsRu9HIRq0IV4U7o6dUGTH5/lqUi/DscGQJhOkiPCMGohYlRvKNdQwwhX/FSPi7CH8NQZCgMIU/xsPV5JuhC9FxYUiEn8ZI+Imha65x4YGhazJxoUeEXwCvYiD8GnhmTQB0TnCYIJDKgcSMx+lIq/7HdLSE72sJQVTpt36ck6dpj0dYOOGWLHwGeDcxeXxlGDhrdZAs/BM4HC1Xk0PqZmJfTDslF+fgM/nGA3VKYBf+A+zRv4VOSpdUC+K9wMEICMtQ7rW/ma7koQ245n8m35DsR1I1nk54TJcYnxeeq5m5WR3GkalsaQRYB7wNJqcnvNXMI+kay1aYJoXZjXotCzvDmjVjMbmT0sMBXX8aDLHwoGYcyHag0+JSmQZaE9KnqsuazdFUVS7lw5+BrVoaMZp/Ps8Y1SxbNJsjci0Q/6s1ytUTfNm6rhnaNZNj8t0C8FSr0uXs9nnnkZU+HWWN+U4+ut2U0anFIpuAG+mufS6RNm9qH7XWzEW+eLFvSYbUVX3JvqWd+snXuWj/t+5bErnzOh/lCX7uTCsB1uqnslgX3uek2Zn2QYfoE52ZuCXLIp4nAv4BTeSb38Ra/j8AAAAASUVORK5CYII="
    />
  </svg>
);

export default NidratechLogo;
